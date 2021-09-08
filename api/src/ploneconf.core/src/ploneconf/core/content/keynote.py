from plone.dexterity.content import Container
from plone.supermodel import model
from ploneconf.core.content.slot import ISlot
from ploneconf.core.content.slot import Slot
from zope.interface import implementer


class IKeynote(ISlot):
    """Plone Conference Keynote."""


@implementer(IKeynote)
class Keynote(Slot):
    """Convenience subclass for ``Keynote`` portal type."""
